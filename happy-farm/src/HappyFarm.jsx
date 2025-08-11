import React, { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardHeader, CardContent, CardTitle } from './components/ui/card'

export default function HappyFarm() {
  const [coins, setCoins] = useState(50)
  const [plots, setPlots] = useState(Array(12).fill(null))

  function plant(i) {
    if (coins < 5) return alert('Не хватает монет')
    const copy = [...plots]
    copy[i] = '🌾'
    setPlots(copy)
    setCoins(coins - 5)
  }

  return (
    <div className='p-4 max-w-3xl mx-auto space-y-4'>
      <Card>
        <CardHeader><CardTitle>🌻 Весёлая ферма</CardTitle></CardHeader>
        <CardContent>
          <div>Монеты: {coins}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Поле</CardTitle></CardHeader>
        <CardContent>
          <div className='grid grid-cols-4 gap-2'>
            {plots.map((p, i) => (
              <Button key={i} onClick={() => plant(i)}>{p || '🟩'}</Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
