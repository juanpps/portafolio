"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 font-sans text-white">
      <div className="border-b border-slate-800 bg-slate-900/80 text-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-3 md:flex-row">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Mail size={14} /> migueljuanguerrerot@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> +57 324 1241 417
            </span>
          </div>
          <span className="flex items-center gap-2 text-slate-400">
            <MapPin size={14} /> Cali, Colombia - Disponibilidad remota y presencial
          </span>
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold leading-tight md:text-5xl"
          >
            Juan Miguel Guerrero Tenorio
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-xl font-medium text-blue-400"
          >
            Asistente Administrativo Digital - Optimizacion Operativa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-lg leading-relaxed text-slate-300"
          >
            Tecnico en sistemas con experiencia en gestion operativa, organizacion de inventarios y digitalizacion de
            procesos. Me especializo en estructurar flujos de trabajo, optimizar tareas administrativas y mejorar la
            eficiencia mediante herramientas digitales.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="/CV_Juan_Miguel_Guerrero.pdf"
              download
              className="rounded-2xl bg-blue-600 px-8 py-4 font-medium shadow-xl transition hover:bg-blue-700"
            >
              Descargar hoja de vida
            </a>

            <a
             href="mailto:migueljuanguerrerot@gmail.com?subject=Proceso%20de%20Selección&body=Hola%20Juan,%20quisiera%20contactarte%20respecto%20a%20una%20oportunidad%20laboral."
             className="border border-slate-600 hover:border-blue-500 hover:text-blue-400 px-8 py-4 rounded-2xl transition inline-block"
            >
              Enviar correo
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative h-96 w-80 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
            <Image
              src="/tu-foto-profesional.jpeg"
              alt="Juan Miguel Guerrero"
              fill
              sizes="(max-width: 768px) 320px, 320px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-4xl border-t border-slate-800 px-6 py-20">
        <h2 className="mb-8 text-3xl font-semibold">Objetivo profesional</h2>
        <p className="text-lg leading-relaxed text-slate-300">
          Integrarme a una organizacion donde pueda aportar en la optimizacion de procesos administrativos y digitales,
          contribuyendo a la eficiencia operativa, organizacion interna y mejora continua.
        </p>
      </section>

      <section className="mx-auto max-w-4xl border-t border-slate-800 px-6 py-20">
        <h2 className="mb-12 text-3xl font-semibold">Experiencia profesional</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-semibold">Dominik Vallegrande</h3>
            <p className="text-slate-400">Gestion operativa y atencion al cliente - 2025</p>

            <ul className="mt-6 list-inside list-disc space-y-3 text-slate-300">
              <li>Gestion de caja y atencion directa a clientes.</li>
              <li>Organizacion y control estructurado de inventario fisico.</li>
              <li>Implementacion de catalogo digital para optimizar ventas.</li>
              <li>Mejora de procesos internos mediante herramientas tecnologicas.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl border-t border-slate-800 px-6 py-20">
        <h2 className="mb-12 text-3xl font-semibold">Competencias</h2>

        <div className="grid gap-10 text-lg text-slate-300 md:grid-cols-2">
          <div className="space-y-2">
            <p>Gestion y control de inventarios</p>
            <p>Digitalizacion de procesos administrativos</p>
            <p>Organizacion de informacion</p>
            <p>Manejo de herramientas digitales</p>
          </div>

          <div className="space-y-2">
            <p>Atencion al cliente multicanal</p>
            <p>Optimizacion de flujos de trabajo</p>
            <p>Pensamiento analitico</p>
            <p>Orientacion a resultados</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-16 text-center text-slate-500">
        (c) {new Date().getFullYear()} Juan Miguel Guerrero Tenorio
      </footer>
    </main>
  );
}
