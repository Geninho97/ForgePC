"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    { icon: MapPin, label: "Localização", value: "Lisboa, Portugal" },
    { icon: Mail, label: "Email", value: "geral@forgepc.pt" },
    { icon: Phone, label: "Telefone", value: "+351 912 345 678" },
  ]

  return (
    <section id="contato" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm font-semibold text-accent mb-3 sm:mb-4 tracking-widest uppercase">Contacto</p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
              Vamos construir juntos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Pronto para a sua build? Entre em contacto para um orçamento sem compromisso.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-card border border-white/5 rounded-lg flex items-center justify-center group-hover:border-primary/30 transition-colors flex-shrink-0">
                      <item.icon className="text-primary" size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                        {item.label}
                      </div>
                      <div className="font-semibold text-foreground text-sm sm:text-base truncate">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 sm:pt-6 hidden lg:block">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Horário:</strong>
                  <br />
                  Seg - Sex: 9h - 18h
                  <br />
                  Sáb: 10h - 14h
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="h-full min-h-[300px] flex items-center justify-center bg-card border border-white/5 rounded-xl p-8 sm:p-12 text-center">
                  <div>
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                      <CheckCircle2 className="text-accent" size={28} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Mensagem enviada!</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Respondemos em menos de 24 horas.</p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-card border border-white/5 rounded-xl p-5 sm:p-8 space-y-4 sm:space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">
                        Nome
                      </Label>
                      <Input
                        id="name"
                        placeholder="O seu nome"
                        required
                        className="h-11 sm:h-12 bg-background border-white/5"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@exemplo.pt"
                        required
                        className="h-11 sm:h-12 bg-background border-white/5"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+351 912 345 678"
                        className="h-11 sm:h-12 bg-background border-white/5"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plan" className="text-sm">
                        Plano
                      </Label>
                      <select
                        id="plan"
                        className="w-full h-11 sm:h-12 px-4 rounded-lg border border-white/5 bg-background text-foreground text-sm"
                        required
                      >
                        <option value="">Selecione</option>
                        <option value="essencial">Essencial - 150€</option>
                        <option value="pro">Pro - 250€</option>
                        <option value="extreme">Extreme - 400€</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm">
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva a sua build..."
                      rows={4}
                      required
                      className="bg-background resize-none border-white/5"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-11 sm:h-12 gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "A enviar..."
                    ) : (
                      <>
                        <Send size={16} /> Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
