import { items } from '../data/Items';
import { useTrackerStore } from '../store/trackerStore';

export const ItemGrid = () => {
  const { obtainedItems, toggleItem } = useTrackerStore();

  const getItemImageUrl = (iconFileName: string) => {
    try {
      // Fixed the path to match your folder structure
      return new URL(`../assets/items/${iconFileName}`, import.meta.url).href;
    } catch {
      return null;
    }
  };

  const renderSection = (title: string, categoryFilter: string) => (
    <div style={{ marginBottom: '40px' }}>
      <h2 style={{ borderBottom: '1px solid #444', paddingBottom: '10px', marginBottom: '15px' }}>
        {title}
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '10px' 
      }}>
        {items.filter(item => item.category === categoryFilter).map((item) => {
          const isObtained = obtainedItems[item.id];
          const imageUrl = getItemImageUrl(item.icon);
          
          return (
            <div 
              key={item.id}
              onClick={() => toggleItem(item.id)}
              style={{
                backgroundColor: '#2a2a2a',
                border: isObtained ? '2px solid #fbbf24' : '2px solid transparent',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                opacity: isObtained ? 1 : 0.4,
                filter: isObtained ? 'none' : 'grayscale(100%)',
                textAlign: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ width: '40px', height: '40px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt={item.name}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain',
                      imageRendering: 'pixelated'
                    }}
                    onError={(e) => {
                      // Fallback if image can't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement!;
                      parent.style.background = '#555';
                      parent.style.borderRadius = '50%';
                      parent.innerHTML = `<span style="font-size: 12px; color: #ccc;">${item.name.charAt(0)}</span>`;
                    }}
                  />
                ) : (
                  // Placeholder if no image available
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    background: '#555', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#ccc'
                  }}>
                    {item.name.charAt(0)}
                  </div>
                )}
              </div>
              <div style={{ fontSize: '10px', marginTop: '5px', wordBreak: 'break-word' }}>
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      {renderSection('Equipment', 'equipment')}
      {renderSection('Swords', 'sword')}
      {renderSection('Shields', 'shield')}
      {renderSection('Masks', 'mask')}
      {renderSection('Songs', 'song')}
      {renderSection('Boss Remains', 'remains')}
      {renderSection('Quest Items', 'quest')}
    </div>
  );
};