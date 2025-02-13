"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, ArrowUpRight, Bell, Home, LineChart, Settings } from "lucide-react"
import Image from "next/image"

export default function CryptoApp() {
  const [currentScreen, setCurrentScreen] = useState("welcome")

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full">
        {/* Welcome Screen */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 flex flex-col justify-between min-h-[600px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-50">
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          <div className="relative">
            <Image
              src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-12-27%20212853-uuMl2cAQ8PQ7axSA7oA6VDMNVWgCZA.png`}
              alt="Crypto coins illustration"
              width={200}
              height={200}
              className="mb-8"
            />
            <h1 className="text-3xl font-bold mb-4">Easy Way to Invest in Crypto</h1>
            <p className="text-blue-100 mb-8">
              A new way to manage and trade all your crypto easily and fastest in the market
            </p>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="w-12 h-12 rounded-full p-0"
            onClick={() => setCurrentScreen("portfolio")}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Portfolio Screen */}
        <div className="bg-white rounded-3xl p-6 min-h-[600px] flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h2 className="text-xl font-semibold">Nora Johnson</h2>
              <p className="text-gray-500">Welcome Back 👋</p>
            </div>
            <Avatar className="w-12 h-12 ml-auto">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>NJ</AvatarFallback>
            </Avatar>
          </div>

          <Card className="bg-blue-600 text-white p-6 rounded-2xl mb-6">
            <p className="text-sm mb-2">Current Balance</p>
            <h3 className="text-3xl font-bold mb-2">$143,421.20</h3>
            <div className="flex items-center text-blue-100">
              <span>Weekly Profit</span>
              <span className="ml-2 flex items-center">
                2.35%
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Card>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">My Portfolio</h3>
              <Button variant="link" className="text-blue-600">
                View all
              </Button>
            </div>
            <div className="space-y-4">
              <CryptoItem name="Bitcoin" symbol="BTC" amount="1,132,151" change="+2.35%" />
              <CryptoItem name="Ethereum" symbol="ETH" amount="1,132,151" change="+2.35%" />
            </div>
          </div>

          <div className="mt-auto">
            <nav className="flex justify-around items-center pt-4 border-t">
              <NavItem icon={<Home className="w-5 h-5" />} label="Home" active />
              <NavItem icon={<LineChart className="w-5 h-5" />} label="Market" />
              <NavItem icon={<Bell className="w-5 h-5" />} label="Notifications" />
              <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
            </nav>
          </div>
        </div>

        {/* Trading Screen */}
        <div className="bg-white rounded-3xl p-6 min-h-[600px]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Image src="/placeholder.svg" alt="Bitcoin" width={24} height={24} />
              <h2 className="font-semibold">Trade Bitcoin</h2>
            </div>
            <span className="text-gray-500">BTC</span>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold">44,826.12 $</span>
              <span className="text-green-500">2.35% ↑</span>
            </div>
            <div className="h-48 bg-gray-50 rounded-lg mb-4"></div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>1h</span>
              <span>1d</span>
              <span>1w</span>
              <span>1m</span>
              <span>1y</span>
            </div>
          </div>

          <div className="space-y-4">
            <StatItem label="Current Price" value="44,826.12 $" />
            <StatItem label="Market Cap" value="836,819 $" />
            <StatItem label="Volume 24h" value="35,867 $" />
            <StatItem label="Available Supply" value="18,784" />
            <StatItem label="Max Supply" value="21,000" />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <Button variant="outline" className="bg-red-50 text-red-600 hover:bg-red-100">
              Sell
            </Button>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Buy</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CryptoItem({
  name,
  symbol,
  amount,
  change,
}: { name: string; symbol: string; amount: string; change: string }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-gray-500">{symbol}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">${amount}</p>
        <p className="text-sm text-green-500">{change}</p>
      </div>
    </div>
  )
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      className={`flex flex-col items-center gap-1 p-2 ${
        active ? "text-blue-600" : "text-gray-400"
      } transition-colors hover:text-blue-600`}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  )
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
