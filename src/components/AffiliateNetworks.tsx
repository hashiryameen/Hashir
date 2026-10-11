import React, { useState } from 'react';
import { AFFILIATE_NETWORKS_DATA } from '../data/portfolioData';
import { Network, CheckCircle2, Plus, ExternalLink, Shield } from 'lucide-react';
import { AffiliateNetworkItem } from '../types/portfolio';

export const AffiliateNetworks: React.FC = () => {
  const [networks, setNetworks] = useState<AffiliateNetworkItem[]>(AFFILIATE_NETWORKS_DATA);
  const [showAddPartnerModal, setShowAddPartnerModal] = useState(false);
  const [newNetworkName, setNewNetworkName] = useState('');
  const [newNetworkDesc, setNewNetworkDesc] = useState('');

  const handleAddNetwork = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNetworkName.trim()) return;

    const item: AffiliateNetworkItem = {
      id: `network-${Date.now()}`,
      name: newNetworkName,
      model: 'Performance Marketing Network',
      description: newNetworkDesc || 'Experience managing affiliate tracking links and performance campaigns.',
      capabilities: [
        'Tracking link generation & sub-ID tracking',
        'Publisher campaign management',
      ],
    };

    setNetworks([...networks, item]);
    setShowAddPartnerModal(false);
    setNewNetworkName('');
    setNewNetworkDesc('');
  };

  return (
    <section id="networks" className="py-16 sm:py-20 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              05. Publisher Partnerships
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Affiliate Networks
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl">
              Experience working with affiliate marketing networks and publisher-based performance campaigns.
            </p>
          </div>

          <button
            onClick={() => setShowAddPartnerModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 shadow-xs cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Network Partner</span>
          </button>
        </div>

        {/* Networks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {networks.map((net) => (
            <div
              key={net.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Brand Logo & Name Header */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    {/* Official Crisp Logo Badge */}
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-base tracking-tighter shrink-0 shadow-xs">
                      {net.id === 'awin' ? (
                        <div className="flex items-center tracking-tight">
                          <span className="text-amber-400 text-lg font-black mr-0.5">A</span>
                          <span className="text-white text-xs font-bold tracking-widest uppercase">WIN</span>
                        </div>
                      ) : net.id === 'impact' ? (
                        <div className="flex items-center">
                          <span className="text-blue-400 text-base font-extrabold">impact</span>
                        </div>
                      ) : (
                        <Network className="w-5 h-5 text-blue-400" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {net.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {net.model}
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <Shield className="w-3 h-3" />
                    <span>Verified Publisher</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {net.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Publisher Capabilities
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {net.capabilities.map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal to add affiliate network */}
        {showAddPartnerModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Add Affiliate Network
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Add an affiliate network or tracking partner you work with.
              </p>

              <form onSubmit={handleAddNetwork} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Network Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CJ Affiliate, Rakuten, ClickBank"
                    value={newNetworkName}
                    onChange={(e) => setNewNetworkName(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Description & Capabilities
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your role or experience with this platform..."
                    value={newNetworkDesc}
                    onChange={(e) => setNewNetworkDesc(e.target.value)}
                    className="w-full text-xs px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white"
                  />
                </div>

                <div className="flex justify-end gap-2.5 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowAddPartnerModal(false)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    Add Network
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
