"use client"

import React, { useState } from 'react';
import { Wind, Droplets, Gauge, Activity, MapPin, Wifi, Battery } from 'lucide-react';

const OutdoorAirPurifier = () => {
  const [activeTab, setActiveTab] = useState('prototype');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">AEROVIVE</h1>
        <p className="text-xl text-gray-600">Outdoor Air Purifier untuk Bus Transportasi Publik</p>
      </div>

      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex gap-4 border-b border-gray-300">
          <button
            onClick={() => setActiveTab('prototype')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'prototype'
                ? 'text-blue-600 border-b-4 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Prototype Alat
          </button>
          <button
            onClick={() => setActiveTab('exploded')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'exploded'
                ? 'text-blue-600 border-b-4 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Komponen dan Lapisan
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'dashboard'
                ? 'text-blue-600 border-b-4 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Dashboard Monitoring
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {activeTab === 'prototype' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Desain Prototype Alat</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-md">
                  <div className="bg-gradient-to-b from-gray-700 to-gray-900 rounded-3xl p-8 shadow-2xl">
                    <div className="bg-green-400 rounded-t-2xl p-4 mb-4 text-center">
                      <Wind className="w-8 h-8 mx-auto text-white mb-2" />
                      <p className="text-white font-semibold text-sm">AIR OUTLET</p>
                      <p className="text-white text-xs">Udara Bersih keluar</p>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-3 text-center">
                        <p className="text-sm font-bold text-blue-800">HEPA FILTER</p>
                      </div>
                      <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 text-center">
                        <p className="text-sm font-bold text-yellow-800">MEDIUM FILTER</p>
                      </div>
                      <div className="bg-orange-100 border-2 border-orange-400 rounded-lg p-3 text-center">
                        <p className="text-sm font-bold text-orange-800">PRE-FILTER</p>
                      </div>
                    </div>

                    <div className="bg-gray-600 rounded-lg p-3 mb-4 text-center">
                      <Activity className="w-6 h-6 mx-auto text-white mb-1" />
                      <p className="text-white text-xs">BLOWER MOTOR</p>
                    </div>

                    <div className="bg-red-400 rounded-b-2xl p-4 text-center">
                      <p className="text-white text-xs">Udara Kotor masuk</p>
                      <p className="text-white font-semibold text-sm">AIR INLET</p>
                      <Wind className="w-8 h-8 mx-auto text-white mt-2" />
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <div className="inline-block bg-gray-400 rounded px-8 py-2">
                      <p className="text-white text-sm font-semibold">MOUNTING BRACKET</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Dipasang di atap bus</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Spesifikasi Teknis</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Dimensi</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Panjang: 80 cm</li>
                      <li>Lebar: 60 cm</li>
                      <li>Tinggi: 45 cm</li>
                      <li>Berat: 25 kg</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Kapasitas</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Air Flow Rate: 1200 m3/jam</li>
                      <li>Coverage Area: 50-100 meter radius</li>
                      <li>Efisiensi Filtrasi: 99.97%</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Power dan Konektivitas</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Power: 12V DC dari bus + Solar Panel</li>
                      <li>Konsumsi: 150W</li>
                      <li>IoT: 4G LTE Modem</li>
                      <li>GPS: Built-in Tracker</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Material</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>Casing: Aluminum Alloy tahan karat</li>
                      <li>Waterproof Rating: IP65</li>
                      <li>UV Resistant: Yes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'exploded' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Komponen dan Lapisan Filter</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="border-2 border-orange-300 rounded-xl p-6 bg-orange-50 hover:shadow-lg transition-shadow">
                <div className="bg-orange-500 w-full h-32 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Wind className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-bold text-lg">PRE-FILTER</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Layer 1: Pre-Filter</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Menyaring partikel besar seperti debu kasar, serbuk sari, rambut, dan debris.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>Material: Polyester mesh</li>
                  <li>Efisiensi: 70-80%</li>
                  <li>Target: Partikel lebih dari 10 mikrometer</li>
                  <li>Umur pakai: 3-6 bulan</li>
                </ul>
              </div>

              <div className="border-2 border-yellow-300 rounded-xl p-6 bg-yellow-50 hover:shadow-lg transition-shadow">
                <div className="bg-yellow-500 w-full h-32 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Droplets className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-bold text-lg">MEDIUM FILTER</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Layer 2: Medium Filter</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Menyaring partikel menengah, asap kendaraan, dan polutan industri.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>Material: Activated Carbon</li>
                  <li>Efisiensi: 85-95%</li>
                  <li>Target: Partikel 1-10 mikrometer</li>
                  <li>Umur pakai: 6-12 bulan</li>
                </ul>
              </div>

              <div className="border-2 border-blue-300 rounded-xl p-6 bg-blue-50 hover:shadow-lg transition-shadow">
                <div className="bg-blue-500 w-full h-32 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Activity className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-bold text-lg">HEPA FILTER</p>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Layer 3: HEPA Filter</h3>
                <p className="text-sm text-gray-700 mb-3">
                  Menyaring PM2.5, bakteri, virus, dan partikel sangat halus yang berbahaya.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>Material: H13 HEPA</li>
                  <li>Efisiensi: 99.97%</li>
                  <li>Target: Partikel 0.3 mikrometer ke atas</li>
                  <li>Umur pakai: 12-18 bulan</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <Gauge className="w-8 h-8 mx-auto mb-2 text-gray-700" />
                <p className="font-semibold text-sm">Air Quality Sensor</p>
                <p className="text-xs text-gray-600 mt-1">PM2.5, PM10, CO2, NO2</p>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <Activity className="w-8 h-8 mx-auto mb-2 text-gray-700" />
                <p className="font-semibold text-sm">Blower Motor</p>
                <p className="text-xs text-gray-600 mt-1">Variable Speed 1200 RPM</p>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <Wifi className="w-8 h-8 mx-auto mb-2 text-gray-700" />
                <p className="font-semibold text-sm">IoT Module</p>
                <p className="text-xs text-gray-600 mt-1">4G LTE + GPS Tracker</p>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <Battery className="w-8 h-8 mx-auto mb-2 text-gray-700" />
                <p className="font-semibold text-sm">Power System</p>
                <p className="text-xs text-gray-600 mt-1">12V DC + Solar Panel</p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-red-50 to-green-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Alur Kerja Sistem</h3>
              <div className="flex items-center justify-center flex-wrap gap-4">
                <div className="bg-red-400 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  Udara Kotor Masuk
                </div>
                <span className="text-2xl text-gray-600">→</span>
                <div className="bg-orange-400 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  Pre-Filter
                </div>
                <span className="text-2xl text-gray-600">→</span>
                <div className="bg-yellow-400 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  Medium Filter
                </div>
                <span className="text-2xl text-gray-600">→</span>
                <div className="bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  HEPA Filter
                </div>
                <span className="text-2xl text-gray-600">→</span>
                <div className="bg-purple-400 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  Sensor Monitor
                </div>
                <span className="text-2xl text-gray-600">→</span>
                <div className="bg-green-400 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  Udara Bersih Keluar
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Monitoring Real-Time</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Kualitas Udara</p>
                    <p className="text-3xl font-bold">BAIK</p>
                    <p className="text-xs mt-1">PM2.5: 35 ug/m3</p>
                  </div>
                  <Wind className="w-12 h-12 opacity-50" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Bus Aktif</p>
                    <p className="text-3xl font-bold">48</p>
                    <p className="text-xs mt-1">dari 50 unit</p>
                  </div>
                  <Activity className="w-12 h-12 opacity-50" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Udara Dibersihkan</p>
                    <p className="text-3xl font-bold">2.4M</p>
                    <p className="text-xs mt-1">m3 hari ini</p>
                  </div>
                  <Droplets className="w-12 h-12 opacity-50" />
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Filter Status</p>
                    <p className="text-3xl font-bold">92%</p>
                    <p className="text-xs mt-1">Kondisi baik</p>
                  </div>
                  <Gauge className="w-12 h-12 opacity-50" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Peta Kualitas Udara Real-Time
                </h3>
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                      {[...Array(64)].map((_, i) => (
                        <div key={i} className={`border border-gray-300 ${
                          i % 3 === 0 ? 'bg-green-300' : i % 3 === 1 ? 'bg-yellow-300' : 'bg-orange-300'
                        }`}></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute top-1/4 left-1/4 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold">BUS 1</span>
                  </div>
                  <div className="absolute top-1/2 right-1/3 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold">BUS 2</span>
                  </div>
                  <div className="absolute bottom-1/4 left-1/2 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold">BUS 3</span>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <MapPin className="w-16 h-16 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-600 font-semibold">Jakarta dan Surabaya</p>
                    <p className="text-sm text-gray-500">48 Bus Aktif Monitoring</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-4 justify-center flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-400 rounded"></div>
                    <span className="text-xs text-gray-600">Baik 0-50</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                    <span className="text-xs text-gray-600">Sedang 51-100</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-400 rounded"></div>
                    <span className="text-xs text-gray-600">Tidak Sehat 101-150</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-400 rounded"></div>
                    <span className="text-xs text-gray-600">Berbahaya lebih dari 150</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-800 mb-3">Data Real-Time</h3>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">PM2.5</span>
                        <span className="text-lg font-bold text-green-600">35 ug/m3</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '35%'}}></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">PM10</span>
                        <span className="text-lg font-bold text-yellow-600">68 ug/m3</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">CO2</span>
                        <span className="text-lg font-bold text-blue-600">420 ppm</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">NO2</span>
                        <span className="text-lg font-bold text-purple-600">28 ppb</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '30%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-800 mb-3">Bus Aktif Terdekat</h3>
                  <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm">TransJakarta 1A</p>
                        <p className="text-xs text-gray-500">Jl. Sudirman - Blok M</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-green-600 font-semibold">Online</p>
                        <p className="text-xs text-gray-500">Filter: 85%</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm">TransJakarta 2H</p>
                        <p className="text-xs text-gray-500">Jl. Gatot Subroto</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-green-600 font-semibold">Online</p>
                        <p className="text-xs text-gray-500">Filter: 92%</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm">TransJakarta 5B</p>
                        <p className="text-xs text-gray-500">Kampung Melayu</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-yellow-600 font-semibold">Warning</p>
                        <p className="text-xs text-gray-500">Filter: 45%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4">
                  <p className="text-sm font-semibold text-yellow-800">Maintenance Alert</p>
                  <p className="text-xs text-yellow-700 mt-1">3 unit memerlukan penggantian filter minggu ini</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 mb-4">Grafik Kualitas Udara 24 Jam Terakhir</h3>
              <div className="h-48 flex items-end justify-between gap-2">
                {[45, 52, 48, 55, 60, 58, 50, 42, 38, 35, 40, 38, 36, 32, 35, 38, 42, 48, 52, 55, 50, 45, 40, 35].map((value, i) => (
                  <div key={i} className="flex-1 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t hover:from-blue-500 hover:to-blue-700 transition-all cursor-pointer relative group" style={{height: `${value * 1.5}%`}}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {value} ug/m3
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>24:00</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutdoorAirPurifier;