'use client';

import { KeyboardEvent } from 'react';

// Constants for better maintainability
const COLORS = {
  primary: '#1E40AF',
  primaryHover: '#1E3A8A',
  textPrimary: 'text-gray-900',
  textSecondary: 'text-gray-600',
  textMuted: 'text-gray-500',
} as const;

const FEATURE_ITEMS = [
  'AI-powered gift card tracking',
  'Automatic payment optimization',
  'GPS-enabled merchant discovery',
  'Seamless checkout integration',
] as const;

const MESSAGES = {
  comingSoon: 'Demo Video Coming Soon',
  buildingAmazing: "We're building something amazing for you!",
  notifyButton: 'Notify Me When Available',
  alertMessage: 'Coming soon! Subscribe to our newsletter for demo updates.',
} as const;

interface VideoDemoProps {
  onClose: () => void;
}

export function VideoDemo({ onClose }: VideoDemoProps) {
  // Handle keyboard interactions for accessibility
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleButtonClick = () => {
    // In a real app, this would integrate with a proper notification system
    alert(MESSAGES.alertMessage);
  };

  const handleButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <div
      className="p-8"
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-labelledby="video-demo-title"
      aria-describedby="video-demo-description"
    >
      <header className="text-center mb-8">
        <h2 id="video-demo-title" className={`text-2xl font-bold mb-2 ${COLORS.textPrimary}`}>
          PayYoyo Wallet Demo
        </h2>
        <p id="video-demo-description" className={COLORS.textSecondary}>
          See how autonomous payments work in action.
        </p>
      </header>

      {/* Video placeholder with improved accessibility */}
      <section className="relative bg-gray-100 rounded-lg overflow-hidden mb-6" aria-labelledby="video-placeholder">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="PayYoYo Demo Video Placeholder"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </section>

      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className={`font-semibold ${COLORS.primary} mb-2`}>
            What to expect:
          </h3>
          <ul className={`text-sm ${COLORS.textSecondary} space-y-1`} role="list">
            {FEATURE_ITEMS.map((feature, index) => (
              <li key={index} role="listitem">
                • {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleButtonClick}
            onKeyDown={handleButtonKeyDown}
            className={`flex-1 bg-[${COLORS.primary}] text-white px-4 py-3 rounded-lg font-medium hover:bg-[${COLORS.primaryHover}] transition-colors focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary}] focus:ring-offset-2`}
            aria-describedby="notify-description"
            type="button"
          >
            {MESSAGES.notifyButton}
          </button>
          <div id="notify-description" className="sr-only">
            Get notified when the demo video becomes available
          </div>
        </div>
      </div>
    </div>
  );
}
