import { useState } from 'react';
import { Project } from '../types/project';

const API_URL = 'http://127.0.0.1:5000/projects'; // Replace with your actual API URL

export default function useCreateProject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const createProject = async (projectData: Project): Promise<Project | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      const data: Project = await response.json();
      return data;
    } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        return null;      
    } finally {
      setLoading(false);
    }
  };

  return { createProject, loading, error };
}