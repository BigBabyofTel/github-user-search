"use client"

import {GitHubUser} from '@/app/types';
import Image from "next/image"

interface DisplayBoxProps {
    loading: boolean;
    userData: GitHubUser | null;
}

export default function DisplayBox({loading, userData}: DisplayBoxProps) {


    const newDate = (date: string) => {
        const oldDate = new Date(date);
        return new Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'UTC' // Crucial for UTC dates
        }).format(oldDate);
    }

    return (
        <div className="border w-11/12 mt-5 h-[600px] mx-auto rounded-lg shadow-xl p-2 bg-white ">
            <div className="flex flex-col">

                {/* Section with the data added */}

                {loading && <p>Loading...</p>}

                {userData && (
                    <div className="bg-white">
                        <section className="flex items-center p-4">
                            <Image src={userData.avatar_url!} width={100} height={100} alt="Avatar"
                                   className="rounded-full"/>
                            <div className="flex flex-col ml-2">
                                <h1 className="text-3xl font-semibold">{userData.login}</h1>
                                <h2 className="text-blue-600 text-lg">@{userData.name}</h2>
                                <p className="text-lg text-slate-600">Joined {newDate(userData.created_at)}</p>
                            </div>
                        </section>
                        <p className="p-4">{userData.bio}</p>
                        <section className="p-4 bg-neutral-100 rounded-lg">
                            <p className="">Repos</p>
                            <span> {userData.public_repos}</span>
                            <p>Followers</p>
                            <span>{userData.followers}</span>
                            <p>Following</p>
                            <span>{userData.following}</span>

                        </section>
                        <p>Twitter Username: {userData.twitter_username}</p>
                        <p>Blog: {userData.blog}</p>
                        <p>Company: {userData.company}</p>
                        <p>Email: {userData.email}</p>

                    </div>
                )}

            </div>
        </div>
    )
}