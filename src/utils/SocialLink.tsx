import { socialLinks } from "@/data/misc";
import Link from "next/link";
import Image from "next/image";


export default function SocialLink() {
    return(  
        <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
                <Link key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-600 bg-gray-50 rounded-lg shadow-sm hover:shadow-md hover:border-green-500 transition-all ">
                    <Image src={link.icon} alt={link.label} width={20} height={20} className="bg-gray-50"/>
                </Link>
            ))}
        
        </div>
)}