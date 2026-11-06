
import axios from "axios";

// --------------------------------------------------
// API CONFIGURATION
// --------------------------------------------------

const API_BASE_URL = "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});

// --------------------------------------------------
// ERROR HANDLING
// --------------------------------------------------

const handleApiError = (error) => {
  if (error.response) {
    const detail = error.response.data?.detail;

    if (Array.isArray(detail)) {
      throw new Error(
        detail.map((item) => item.msg).join(", ")
      );
    }

    throw new Error(
      typeof detail === "string"
        ? detail
        : "Backend request failed."
    );
  }

  if (error.code === "ECONNABORTED") {
    throw new Error("The backend request timed out.");
  }

  throw new Error(
    "Cannot connect to the MARSWALK backend. Make sure FastAPI is running."
  );
};

// --------------------------------------------------
// SHARED REQUEST HELPERS
// --------------------------------------------------

const postRequest = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

const getRequest = async (url, config = {}) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// --------------------------------------------------
// ROVER MISSION API
// POST /api/rover/mission/plan
// --------------------------------------------------

export const planRoverMission = (missionData) =>
  postRequest("/api/rover/mission/plan", missionData);

// --------------------------------------------------
// ROVER ROUTE COMPARISON API
// POST /api/rover/routes/compare
// Compares shortest, safest, energy-efficient and balanced
// --------------------------------------------------

export const compareRoverRoutes = (comparisonData) =>
  postRequest("/api/rover/routes/compare", comparisonData);

// --------------------------------------------------
// ROVER ENERGY API
// POST /api/rover/energy
// --------------------------------------------------

export const calculateRoverEnergy = (energyData) =>
  postRequest("/api/rover/energy", energyData);

// --------------------------------------------------
// ROVER ENERGY HEALTH
// GET /api/rover/energy/health
// --------------------------------------------------

export const getRoverEnergyHealth = () =>
  getRequest("/api/rover/energy/health");

// --------------------------------------------------
// LEGACY ROUTE PLANNING API
// POST /api/routes/plan
// --------------------------------------------------

export const planRoute = (routeData) =>
  postRequest("/api/routes/plan", routeData);

// --------------------------------------------------
// LEGACY ROUTE COMPARISON API
// POST /api/routes/compare
// --------------------------------------------------

export const compareRoutes = (routeData) =>
  postRequest("/api/routes/compare", routeData);

// --------------------------------------------------
// TERRAIN ANALYSIS API
// POST /api/terrain/analyze
// --------------------------------------------------

export const analyzeTerrain = (terrainData) =>
  postRequest("/api/terrain/analyze", terrainData);

// --------------------------------------------------
// MISSION PLANNING API
// POST /api/missions/plan
// --------------------------------------------------

export const planMission = (missionData) =>
  postRequest("/api/missions/plan", missionData);

// --------------------------------------------------
// GEMINI EXPLANATION API
// POST /api/gemini/explain
// --------------------------------------------------

export const explainMission = (missionData) =>
  postRequest("/api/gemini/explain", missionData);

// --------------------------------------------------
// RASTER INFORMATION
// GET /api/raster/info
// --------------------------------------------------

export const getRasterInfo = () =>
  getRequest("/api/raster/info");

// --------------------------------------------------
// RASTER ELEVATION
// GET /api/raster/elevation
// --------------------------------------------------

export const getRasterElevation = (x, y) =>
  getRequest("/api/raster/elevation", {
    params: { x, y },
  });

// --------------------------------------------------
// RASTER TERRAIN
// GET /api/raster/terrain
// --------------------------------------------------

export const getRasterTerrain = (x, y) =>
  getRequest("/api/raster/terrain", {
    params: { x, y },
  });

// --------------------------------------------------
// DEFAULT EXPORT
// --------------------------------------------------

export default api;
