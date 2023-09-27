"use client";

import Link from "next/link"
import Image from "next/image"
import { useClientEffect, useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders} from 'next-auth/react'

const  Nav = () => {

    const isUserLoggedIn =  false

    const [providers, setProviders] = useState(null);

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

                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav