import React, { Children } from 'react'
import '@styles/globals.css'

export const metadata = {
    title: "Promptopia",
    description: 'Discover and Share AI Prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout