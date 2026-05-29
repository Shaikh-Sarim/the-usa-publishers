import Link from 'next/link'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/auth'

export const metadata = {
  title: 'Manage Leads - Admin Dashboard',
}

export default async function AdminLeadsPage() {
  // Check authentication
  const isAuthenticated = await isAdminAuthenticated()
  if (!isAuthenticated) {
    redirect('/admin/login')
  }

  let leads: any[] = []
  
  try {
    leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    })
  } catch (error) {
    console.error('Error fetching leads:', error)
  }

  const newLeads = leads.filter((l) => l.status === 'new').length
  const contacted = leads.filter((l) => l.status === 'contacted').length
  const converted = leads.filter((l) => l.status === 'converted').length

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container-max py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">
            Manage Leads
          </h1>
          <Link href="/admin" className="text-blue-600 hover:text-blue-700">
            ← Dashboard
          </Link>
        </div>
      </header>

      <div className="container-max py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600 text-sm">New Leads</p>
            <p className="text-2xl font-bold text-slate-900">{newLeads}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Contacted</p>
            <p className="text-2xl font-bold text-slate-900">{contacted}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Converted</p>
            <p className="text-2xl font-bold text-slate-900">{converted}</p>
          </div>
        </div>

        {/* Leads Table */}
        {leads.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Service
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {lead.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                        {lead.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">
                        {lead.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {lead.service}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          lead.status === 'new'
                            ? 'bg-blue-100 text-blue-800'
                            : lead.status === 'contacted'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600">No leads yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
