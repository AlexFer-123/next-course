"use client";

import Link from "next/link"
import Image from "next/image"
import { useClientEffect, useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders} from 'next-auth/react'
import { Provider } from "./Provider";

const  Nav = () => {

    const isUserLoggedIn = true

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropDown] = useState(false)

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();

            setProviders(response)
        }

        setProviders();
    }, [])

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gab-2 flex-center">
                <Image 
                    src="./assets/images/logo.svg" 
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text ml-2">Promptopia</p>
            </Link>

            <div className="sm:flex hidden">
                {isUserLoggedIn ? (
                    <div className="flex gab-3 md:gap-5">
                        <Link href="/create_prompt" className="black_btn" >
                            Create Post
                        </Link>

                        <button type="button" 
                        onClick={signOut} 
                        className="outline_btn">
                            Sign Out
                        </button>

                        <Link href="/profile">
                            <Image src="/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                            >

                            </Image>
                        </Link>
                    </div>
                ):(
                    <>
                        {providers && Object.values(providers).map(provider => {
                            <button
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className="black_btn"
                            >
                                Sign In
                            </button>
                        })}
                    </>
                )}
            </div>

            <div className="sm:hidden flex relative">
                {isUserLoggedIn ? (
                    <div>
                        <Image src="/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                            onClick={() => setToggleDropDown((prev) => !prev)}
                        />

                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    My profile
                                </Link>
                                <Link
                                    href="/create-prompt"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                type="button"
                                onClick={() => {
                                    setToggleDropDown(false)
                                    signOut()
                                }}
                                className="mt-5 w-full black_btn"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map(provider => {
                            <button
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className="black_btn"
                            >
                                Sign In
                            </button>
                        })}
                    </>
                )}

            </div>
        </nav>
    )
}

export default Nav