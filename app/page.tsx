'use client';

import Image from 'next/image';
import SearchBox from '@/components/SearchBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useState } from 'react';
import { GitHubUser, UserData } from './types';
import DisplayBox from '@/components/DisplayBox';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [userData, setUserData] = useState<GitHubUser | null>(null);

  console.log(userData);

  async function handleSearch(username: string) {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error(response.status === 404 ? 'User not found' : 'Failed to fetch user');
      }

      const data: GitHubUser = await response.json();
      //set user data
      setUserData(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occured');
    } finally {
      setLoading(false);
    }

    return;
  }

  return (
    <div className="bg-neutral-100 ">
      <header className="w-11/12 mx-auto py-[32px] flex justify-between items-center">
        <h1 className="text-[26px]">Dev Finder</h1>
        <section className="h-full flex justify-between">
          {/* add a switch that will change the text */}
          <span className="mr-1">Dark</span>
          <DarkModeIcon />
        </section>
      </header>
      <SearchBox onSearch={handleSearch} />
      <DisplayBox loading={loading} userData={userData} />
    </div>
  );
}
