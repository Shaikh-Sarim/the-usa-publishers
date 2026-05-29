import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { isAdminAuthenticated } from '@/lib/auth'

export const metadata = {
  title: 'Manage Books - Admin Dashboard',
}

export default async function AdminBooksPage() {
  // Check authentication
  const isAuthenticated = await isAdminAuthenticated()
  if (!isAuthenticated) {
    redirect('/admin/login')
  }

  let books: any[] = []
  
  try {
    books = await prisma.book.findMany({
      orderBy: { createdAt: 'desc' },
    })
  } catch (error) {
    console.error('Error fetching books:', error)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container-max py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">
            Manage Books
          </h1>
          <div className="flex gap-4">
            <Link href="/admin" className="text-blue-600 hover:text-blue-700">
              ← Dashboard
            </Link>
            <button className="btn-primary text-sm">
              Add New Book
            </button>
          </div>
        </div>
      </header>

      <div className="container-max py-8">
        {books.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Cover
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Author
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Featured
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {books.map((book: any) => (
                  <tr key={book.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      {book.imageUrl && (
                        <div className="relative w-12 h-16">
                          <Image
                            src={book.imageUrl}
                            alt={book.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {book.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {book.author || 'N/A'}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          book.featured
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {book.featured ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-700">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600 mb-4">No books added yet.</p>
            <button className="btn-primary">Add First Book</button>
          </div>
        )}
      </div>
    </div>
  )
}
