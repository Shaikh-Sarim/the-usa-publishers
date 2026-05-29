import Link from 'next/link'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/auth'
import LogoutButton from '@/components/admin/LogoutButton'

export const metadata = {
  title: 'Admin Dashboard - The USA Publishers',
}

export default async function AdminDashboard() {
  // Check authentication
  const isAuthenticated = await isAdminAuthenticated()
  if (!isAuthenticated) {
    redirect('/admin/login')
  }

  let bookCount = 0
  let leadCount = 0
  let assetCount = 0
  let recentLeads: any[] = []

  try {
    [bookCount, leadCount, assetCount] = await Promise.all([
      prisma.book.count(),
      prisma.lead.count(),
      prisma.asset.count(),
    ])

    recentLeads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    })
  } catch (error) {
    console.error('Error fetching admin data:', error)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container-max py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              ← Back to Site
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>

      <div className="container-max py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Books</p>
                <p className="text-3xl font-bold text-slate-900">
                  {bookCount}
                </p>
              </div>
              <div className="text-4xl">📚</div>
            </div>
            <Link href="/admin/books" className="mt-4 inline-block btn-primary text-sm">
              Manage Books
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">New Leads</p>
                <p className="text-3xl font-bold text-slate-900">
                  {leadCount}
                </p>
              </div>
              <div className="text-4xl">📧</div>
            </div>
            <Link href="/admin/leads" className="mt-4 inline-block btn-primary text-sm">
              View Leads
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Distribution Assets</p>
                <p className="text-3xl font-bold text-slate-900">
                  {assetCount}
                </p>
              </div>
              <div className="text-4xl">🖼️</div>
            </div>
            <Link href="/admin/assets" className="mt-4 inline-block btn-primary text-sm">
              Manage Assets
            </Link>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-slate-900">
              Recent Leads
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentLeads.map((lead: any) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {lead.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {lead.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {lead.service}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
