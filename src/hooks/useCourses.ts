"use client";

import { useQuery } from "@tanstack/react-query";

import { getCourses } from "@/services/courseApi";

export const useCourses =
  () => {
    return useQuery({
      queryKey: ["courses"],
      queryFn: getCourses,
    });
  };