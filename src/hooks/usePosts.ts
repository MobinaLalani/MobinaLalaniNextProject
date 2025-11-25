"use client"
import { useQuery } from "@tanstack/react-query"
import { get } from "@/lib/api/client"
import { urls } from "@/lib/api/urls"

export type Post = { id: number; title: string; body: string }

export function usePosts() {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: () => get<Post[]>(urls.posts),
    staleTime: 60_000,
  })
}

