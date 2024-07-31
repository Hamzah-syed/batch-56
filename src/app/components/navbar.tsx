import Link from "next/link"

function Nav() {
    return (
        <div>
            <Link href="/about" >About</Link>
            <Link href="/contact" >Contact</Link>
            <Link href="/" >Home</Link>
        </div>
    )
}

export default Nav