
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Compass,
  Crosshair,
  Mountain,
  Navigation,
  Orbit,
  Route,
  ShieldCheck,
  Signal,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

function StatCard({ icon: Icon, label, value, unit, description }) {
  return (
    <div className="glass-panel rounded-2xl p-5 transition-all hover:border-mars-500/30">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mars-500/10 text-mars-400">
          <Icon size={20} />
        </div>

        <TrendingUp size={16} className="text-slate-600" />
      </div>

      <p className="mt-5 text-sm text-slate-400">{label}</p>

      <div className="mt-1 flex items-baseline gap-2">
        <span className="font-display text-3xl font-bold text-white">
          {value}
        </span>

        {unit && (
          <span className="text-sm text-slate-500">{unit}</span>
        )}
      </div>

      <p className="mt-2 text-xs text-slate-500">{description}</p>
    </div>
  );
}

function Dashboard({ onNavigate }) {
  return (
    <div className="space-y-8">

      {/* WELCOME SECTION */}
      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-mars-400">
            <Orbit size={15} />
            MARS EXPLORATION PROGRAM
          </div>

          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Mission <span className="text-gradient">Control.</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Explore the terrain, evaluate rover mobility and plan
            intelligent exploration missions across Jezero Crater.
          </p>
        </div>

        <button
          onClick={() => onNavigate("mission")}
          className="flex items-center justify-center gap-2 rounded-xl mars-gradient px-5 py-3 text-sm font-bold text-white shadow-lg shadow-mars-500/10 transition hover:brightness-110"
        >
          <Compass size={18} />
          Plan New Mission
          <ArrowRight size={17} />
        </button>
      </section>


      {/* MISSION LOCATION BANNER */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-space-900">
        <div className="absolute inset-0">
          <img
            src="/jesero_ortho.png"
            alt="Jezero Crater Mars orthomosaic"
            className="h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-space-950 via-space-950/80 to-space-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-space-950/70 to-transparent" />
        </div>

        <div className="relative flex min-h-[270px] flex-col justify-between gap-8 p-6 sm:p-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-mars-400/20 bg-mars-500/10 px-3 py-1.5 text-xs font-semibold text-mars-300">
              <Crosshair size={13} />
              ACTIVE EXPLORATION REGION
            </div>

            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Jezero Crater
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
              A scientifically significant Martian impact crater,
              selected for detailed terrain analysis and rover
              mission planning.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Mountain size={14} className="text-mars-400" />
                Mars terrain
              </span>

              <span className="flex items-center gap-1.5">
                <Target size={14} className="text-mars-400" />
                DEM coverage
              </span>

              <span className="flex items-center gap-1.5">
                <Activity size={14} className="text-mars-400" />
                1m resolution
              </span>
            </div>
          </div>

          <button
            onClick={() => onNavigate("routes")}
            className="flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-mars-400/40 hover:bg-mars-500/10"
          >
            <Navigation size={17} className="text-mars-400" />
            Explore Routes
            <ArrowRight size={16} />
          </button>
        </div>
      </section>


      {/* TERRAIN STATISTICS */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-white">
              Terrain Intelligence
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Statistics calculated from the processed Jezero DEM.
            </p>
          </div>

          <span className="hidden items-center gap-2 text-xs text-emerald-400 sm:flex">
            <ShieldCheck size={15} />
            Raster loaded
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon={Mountain}
            label="Elevation Range"
            value="249.18"
            unit="m"
            description="Minimum to maximum elevation difference"
          />

          <StatCard
            icon={Activity}
            label="Mean Slope"
            value="4.72"
            unit="°"
            description="Average calculated terrain slope"
          />

          <StatCard
            icon={Crosshair}
            label="Map Resolution"
            value="1"
            unit="m / pixel"
            description="Projected raster pixel size"
          />

          <StatCard
            icon={Target}
            label="DEM Coverage"
            value="3900 × 4103"
            unit="pixels"
            description="Processed Mars elevation raster"
          />
        </div>
      </section>


      {/* LOWER DASHBOARD GRID */}
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-3">

        {/* MAP PREVIEW */}
        <div className="glass-panel overflow-hidden rounded-2xl lg:col-span-2">
          <div className="flex items-center justify-between border-b border-white/5 p-5">
            <div>
              <h3 className="font-display font-bold text-white">
                Surface Overview
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Jezero Crater orthomosaic preview
              </p>
            </div>

            <span className="rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-400">
              Raster available
            </span>
          </div>

          <div className="relative h-[280px] overflow-hidden bg-space-900">
            <img
              src="/jesero_ortho.png"
              alt="Jezero Crater surface"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-space-950/70 to-transparent" />

            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-white/10 bg-space-950/80 px-3 py-2 text-xs text-white backdrop-blur-md">
              <Signal size={14} className="text-emerald-400" />
              Jezero surface imagery
            </div>
          </div>

          <div className="flex items-center justify-between p-5">
            <p className="text-xs text-slate-500">
              Detailed interactive map available in the route planner.
            </p>

            <button
              onClick={() => onNavigate("routes")}
              className="flex items-center gap-1.5 text-xs font-semibold text-mars-400 hover:text-mars-300"
            >
              Open map
              <ArrowRight size={14} />
            </button>
          </div>
        </div>


        {/* MISSION CONTROL PANEL */}
        <div className="glass-panel rounded-2xl p-5">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-mars-500/10 text-mars-400">
              <Orbit size={19} />
            </div>

            <div>
              <h3 className="font-display font-bold text-white">
                Mission Control
              </h3>

              <p className="text-xs text-slate-500">
                Exploration tools
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button
              onClick={() => onNavigate("mission")}
              className="group flex w-full items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-4 text-left transition hover:border-mars-500/30 hover:bg-mars-500/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mars-500/10 text-mars-400">
                <Compass size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">
                  New Mission
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Configure rover destinations
                </p>
              </div>

              <ArrowRight size={16} className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-mars-400" />
            </button>

            <button
              onClick={() => onNavigate("routes")}
              className="group flex w-full items-center gap-3 rounded-xl border border-white/5 bg-white/[0.025] p-4 text-left transition hover:border-mars-500/30 hover:bg-mars-500/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <Route size={19} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">
                  Route Analysis
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Compare shortest and safest paths
                </p>
              </div>

              <ArrowRight size={16} className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-mars-400" />
            </button>

            <div className="rounded-xl border border-white/5 bg-white/[0.025] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <BatteryCharging size={17} className="text-emerald-400" />
                Rover Energy Model
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Energy consumption estimates will be calculated
                when a mission route is generated.
              </p>
            </div>

            <div className="rounded-xl border border-mars-500/15 bg-mars-500/5 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-mars-300">
                <Sparkles size={16} />
                Gemini Intelligence
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                AI-powered mission explanations and terrain
                recommendations are available through the backend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTNOTE */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-5 text-xs text-slate-600">
        <span>MARSWALK · Jezero Crater Exploration</span>
        <span>Terrain statistics from processed raster data</span>
      </div>

    </div>
  );
}

export default Dashboard;
