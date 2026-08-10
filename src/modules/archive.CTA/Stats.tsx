"use client";

import { useEffect, useState } from "react";
import { Code, GitBranch, Trophy, Star } from "lucide-react";

import {
  getGithubReposCount,
  getGithubCommitsCount,
} from "@/api/api.github";

export default function Stats() {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [commitsCount, setCommitsCount] = useState<number | null>(null);

  useEffect(() => {
    getGithubReposCount()
      .then(setRepoCount)
      .catch(() => setRepoCount(null));

    getGithubCommitsCount()
      .then(setCommitsCount)
      .catch(() => setCommitsCount(null));
  }, []);

  const stats = [
    { icon: Code, value: repoCount ?? "—", label: "Projects Built",},
    { icon: GitBranch, value: commitsCount ?? "—", label: "GitHub Commits",},
    { icon: Trophy, value: "20+", label: "Technologies",},
    { icon: Star, value: "Open to", label: "New Opportunities",},
  ];

  return (
    <section className="px-[10%] py-[2%] grid grid-cols-1 items-center w-full h-screen-[15%] bg-transparent backdrop-blur-md border border-gray-400">
      <div className="">
        <div className="grid grid-cols-2 gap-8 rounded-xl border border-gray-300 backdrop-blur-xl p-8 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-3">
                <Icon size={24} className="text-green-600"/>
                <div>
                  <p className="font-bold text-gray-900"> {stat.value} </p>
                  <p className="text-sm text-gray-500"> {stat.label} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


