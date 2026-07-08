import './globals.css'

export const metadata = {
  title: 'Soedirman Robotic Team',
  description: 'Soedirman Robotic Team is a student organization at Jenderal Soedirman University engaged in robotics research.',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  )
}
