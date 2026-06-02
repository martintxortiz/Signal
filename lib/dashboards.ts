type Dashboard = {
  id: string
  name: string
}

const dashboards: readonly Dashboard[] = [
  { id: "f1d4c4a2-8b1c-4e6e-9b3d-2c5a6e7f8a01", name: "Mission Control" },
  { id: "5ea676a5-2dc1-4e3f-8c6d-9a0b1c2d3e4f", name: "Vehicle Health" },
  { id: "a3b8c9d0-7e1f-4a2b-9c3d-4e5f6a7b8c9d", name: "Telemetry" },
  { id: "b4c5d6e7-8f9a-4b1c-9d2e-3f4a5b6c7d8e", name: "Propulsion" },
  { id: "c7d8e9f0-1a2b-4c3d-9e4f-5a6b7c8d9e0f", name: "Thermal" },
]

function getDashboardById(id: string): Dashboard | undefined {
  return dashboards.find((dashboard) => dashboard.id === id)
}

function getDashboardHref(id: string) {
  return `/dashboard/d/${id}` as const
}

export { dashboards, getDashboardById, getDashboardHref }
export type { Dashboard }
