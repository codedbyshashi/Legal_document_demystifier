export const getRiskColor = (level: string) => {
  switch (level) {
    case 'high': return 'text-red-600 bg-red-50 border-red-200';
    case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'low': return 'text-green-600 bg-green-50 border-green-200';
    default: return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};

export const getRiskIcon = (level: string) => {
  switch (level) {
    case 'high': return '🚨';
    case 'medium': return '⚠️';
    case 'low': return '✅';
    default: return '📄';
  }
};