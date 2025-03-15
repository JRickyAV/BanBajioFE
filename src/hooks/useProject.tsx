import { useState, useEffect, useCallback } from "react";
import { Project } from "../types/project";

const API_URL = "http://127.0.0.1:5000/projects"; // Replace with your API IP

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Define fetch function outside useEffect so it can be used elsewhere
  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const text = await response.text();

      try {
        const json = JSON.parse(text);
        setProjects(json);
        setError(null); // Reset error on success
      } catch (err) {
        throw new Error(`Invalid JSON response: ${text}`);
      }
    } catch (err: any) {
      setError(err.message || "Error fetching projects");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch projects when the hook is first used
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return { projects, loading, error, refetch: fetchProjects };
}
