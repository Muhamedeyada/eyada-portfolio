import axios from "axios";
import { Project, projectsData } from "../data/projects";

// Project service
export const projectService = {
  getAll: async () => {
    try {
      // Simply return the projects data from the JSON file
      return projectsData; // Return the data from the JSON file
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  },
};

// CV service
export interface CV {
  _id: string;
  url: string;
}

export const cvService = {
  getAll: async () => {
    try {
      const response = await api.get("/cv");
      // Safely extract data from response
      if (response.data && response.data.data) {
        return response.data.data || [];
      }
      return [];
    } catch (error) {
      console.error("Error fetching CVs:", error);
      // Return empty array instead of throwing to prevent UI breaking
      return [];
    }
  },

  create: async (cv: CV) => {
    try {
      const response = await api.post("/cv", cv);
      return response.data.data;
    } catch (error) {
      console.error("Error creating CV:", error);
      throw error;
    }
  },

  update: async (cv: CV) => {
    try {
      const response = await api.put("/cv", cv);
      return response.data.data;
    } catch (error) {
      console.error("Error updating CV:", error);
      throw error;
    }
  },

  delete: async (id: string) => {
    try {
      const response = await api.delete(`/cv/${id}`);
      return response.data.data;
    } catch (error) {
      console.error("Error deleting CV:", error);
      throw error;
    }
  },
};
