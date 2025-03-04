import { useState, useEffect } from "react";
import { Project } from "../types/project";

const API_URL = "http://127.0.0.1:5000/projects"; // Replace with your API IP

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);

        // Read raw response
        const text = await response.text();
        try {
          const json = JSON.parse(text); // Try parsing JSON
          setProjects(json);
        } catch (err) {
          throw new Error(`Invalid JSON response: ${text}`);
        }
      } catch (err: any) {
        setError(err.message || "Error fetching projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
