import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="navbar-logo">
          PixelCode作业站
        </Link>
        <div className="navbar-links">
          <Link href="/" className="navbar-link">首页</Link>
          <Link href="/archive" className="navbar-link">归档</Link>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen pixel-grid items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full" style={{opacity: 0.3}}></div>
      
      <Navbar />

      <main className="flex-grow container px-4 py-12 pt-28 w-full z-10">
        <header className="text-center mb-20">
          <h1 className="main-title">
            《Web前端开发》像素课堂
          </h1>
          <div style={{
            color: '#00cc70',
            fontSize: '1.125rem',
            fontFamily: 'monospace',
            marginBottom: '1.5rem',
            letterSpacing: '1px',
            textShadow: '1px 1px 0px #003d1f'
          }}>
            P231014686 张金晶
          </div>
          <div className="info-box">
            <p className="info-text">
              {"> "}学习.进步.创造{" <"}
            </p>
            <p className="sub-text">
              PRESS START TO CONTINUE...
            </p>
          </div>
        </header>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>
      </main>

      <WakaTimeStats />
    </div>
  );
}
