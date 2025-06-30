"use client"

import { GitHubUser } from '@/app/types';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface DisplayBoxProps {
  loading: boolean;
  userData: GitHubUser | null;
}

export default function DisplayBox({ loading, userData }: DisplayBoxProps) {
  return (
    <div className="border w-11/12 mt-5 h-[600px] mx-auto rounded-lg shadow-xl p-2">
    <div className="flex flex-col">

      {/* Section with the data added */}
    
    {loading && <p>Loading...</p>}
    
    {userData && (
      <div>
        <section>
        <img src={userData.avatar_url!} width={100} height={100} alt="Avatar" />
        <h1>{userData.login}</h1>
        <h2>@{userData.name}</h2>
        </section>
        <p>Bio: {userData.bio}</p>
<section>
<p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <p>Public Repos: {userData.public_repos}</p>
</section>
        <p>Twitter Username: {userData.twitter_username}</p>
        <p>Blog: {userData.blog}</p>
        <p>Company: {userData.company}</p>
        <p>Email: {userData.email}</p>
        <p>Created At: {userData.created_at}</p>
        </div>
    )}

    </div>
   </div>
  )
}