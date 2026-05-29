'use client'

import { useEffect, useState, FormEvent } from 'react'
import Link from 'next/link'

interface Asset {
  id: string
  name: string
  platform: string
  imageUrl: string
  description?: string
  featured: boolean
  order: number
}

export default function AdminAssets() {
  const [assets, setAssets] = useState<Asset[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAdding, setIsAdding] = useState(false)
  const [error, setError] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    platform: '',
    imageUrl: '',
    description: '',
    featured: false,
    order: 0,
  })

  useEffect(() => {
    fetchAssets()
  }, [])

  async function fetchAssets() {
    try {
      setIsLoading(true)
      const response = await fetch('/api/assets')
      if (!response.ok) throw new Error('Failed to fetch assets')
      const data = await response.json()
      setAssets(data)
    } catch (err) {
      setError('Failed to load assets')
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    try {
      if (editingId) {
        // Update
        const response = await fetch(`/api/assets/${editingId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!response.ok) throw new Error('Failed to update asset')
        await fetchAssets()
        setEditingId(null)
      } else {
        // Create
        const response = await fetch('/api/assets', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!response.ok) throw new Error('Failed to create asset')
        await fetchAssets()
      }

      // Reset form
      setFormData({
        name: '',
        platform: '',
        imageUrl: '',
        description: '',
        featured: false,
        order: 0,
      })
      setIsAdding(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this asset?')) return

    try {
      const response = await fetch(`/api/assets/${id}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Failed to delete asset')
      await fetchAssets()
    } catch (err) {
      setError('Failed to delete asset')
      console.error(err)
    }
  }

  function handleEdit(asset: Asset) {
    setFormData({
      name: asset.name,
      platform: asset.platform,
      imageUrl: asset.imageUrl,
      description: asset.description || '',
      featured: asset.featured,
      order: asset.order,
    })
    setEditingId(asset.id)
    setIsAdding(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Assets Management</h2>
        <div className="flex gap-2">
          <Link href="/admin" className="text-gray-600 hover:text-gray-900">
            ← Back
          </Link>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded text-red-600">
          {error}
        </div>
      )}

      {/* Form */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-slate-900">
          {editingId ? 'Edit Asset' : 'Add New Asset'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Asset Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none"
              required
            />
            <input
              type="text"
              placeholder="Platform (e.g., Amazon KDP)"
              value={formData.platform}
              onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none"
              required
            />
            <input
              type="url"
              placeholder="Image URL"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none"
              required
            />
            <input
              type="number"
              placeholder="Order"
              value={formData.order}
              onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none"
            />
          </div>
          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 outline-none"
            rows={3}
          />
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm text-gray-700">Featured</span>
            </label>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition"
            >
              {editingId ? 'Update Asset' : 'Add Asset'}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null)
                  setFormData({
                    name: '',
                    platform: '',
                    imageUrl: '',
                    description: '',
                    featured: false,
                    order: 0,
                  })
                }}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 rounded-lg transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            Loading assets...
          </div>
        ) : assets.length === 0 ? (
          <div className="col-span-full text-center py-8 text-gray-500">
            No assets yet. Add one above!
          </div>
        ) : (
          assets.map((asset) => (
            <div
              key={asset.id}
              className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden flex items-center justify-center">
                {asset.imageUrl && (
                  <img
                    src={asset.imageUrl}
                    alt={asset.name}
                    className="w-full h-full object-contain p-4"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 mb-1">{asset.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{asset.platform}</p>
                {asset.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {asset.description}
                  </p>
                )}
                <div className="flex items-center justify-between">
                  {asset.featured && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                  <div className="flex gap-2 ml-auto">
                    <button
                      onClick={() => handleEdit(asset)}
                      className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(asset.id)}
                      className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
