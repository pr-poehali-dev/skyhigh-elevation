import { useState } from "react"
import Icon from "@/components/ui/icon"

export default function HomePage() {
  const [launched, setLaunched] = useState(false)
  const [params] = useState({
    param1: "—",
    param2: "—",
    param3: "—",
  })

  return (
    <div className="h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Neo-brutal grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "8px 8px",
        }}
      />

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-lg">
        {/* Заголовок */}
        <div className="text-center">
          <h1 className="text-5xl font-black tracking-tight text-foreground">
            Orbit OS
          </h1>
          <p className="mt-2 text-muted-foreground text-sm font-medium uppercase tracking-widest">
            Панель управления
          </p>
        </div>

        {/* Кнопка Поехали */}
        <button
          onClick={() => setLaunched(true)}
          className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background font-black text-lg border-4 border-foreground shadow-[6px_6px_0px_0px_#ff2e63] hover:shadow-[2px_2px_0px_0px_#ff2e63] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 active:shadow-none active:translate-x-2 active:translate-y-2"
        >
          <Icon name="Rocket" size={22} />
          Поехали!
        </button>

        {/* Таблица параметров */}
        <div className="w-full border-4 border-foreground shadow-[6px_6px_0px_0px_#000]">
          <table className="w-full">
            <tbody>
              {[
                { label: "Параметр 1", value: launched ? params.param1 : "—" },
                { label: "Параметр 2", value: launched ? params.param2 : "—" },
                { label: "Параметр 3", value: launched ? params.param3 : "—" },
              ].map((row, i) => (
                <tr
                  key={i}
                  className={i < 2 ? "border-b-4 border-foreground" : ""}
                >
                  <td className="px-5 py-4 font-bold text-sm uppercase tracking-wide bg-foreground text-background w-1/2 border-r-4 border-foreground">
                    {row.label}
                  </td>
                  <td className="px-5 py-4 font-mono text-sm text-foreground bg-[#FAFAFA]">
                    {launched ? (
                      <span className="text-[#ff2e63] font-bold">{row.value}</span>
                    ) : (
                      <span className="text-muted-foreground">{row.value}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Статус запуска */}
        {launched && (
          <div className="flex items-center gap-2 text-sm font-bold text-[#ff2e63]">
            <span className="w-2 h-2 rounded-full bg-[#ff2e63] animate-pulse" />
            Процесс запущен
          </div>
        )}

        {/* Ссылка Home */}
        <a
          href="index.html"
          className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
        >
          <Icon name="Home" size={16} />
          home
        </a>
      </div>
    </div>
  )
}
