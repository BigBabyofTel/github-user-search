import { GitHubUser } from "@/app/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserData = create<GitHubUser>()(
    persist((set) => ({
        login: "",
        id: 0,
        avatar_url: "",
        html_url: "",
        name: null,
        company: null,
        blog: null,
        location: null,
        email: null,
        bio: null,
        twitter_username: null,
        public_repos: 0,
        followers: 0,
        following: 0,
        created_at: "",
        setUser: (user: GitHubUser) => set(user),
        clearUser: () => set({
            login: "",
            id: 0,
            avatar_url: "",
            html_url: "",
            name: null,
            company: null,
            blog: null,
            location: null,
            email: null,
            bio: null,
            twitter_username: null,
            public_repos: 0,
            followers: 0,
            following: 0,
            created_at: "",
        })
    }), {
        name: "github-user"
    }),
)