import { items, type ItemDef } from '../data/Items';
import { useTrackerStore } from '../store/trackerStore';

export const ItemGrid = () => {
  const { itemStates, cycleItem } = useTrackerStore();

  const getItemImageUrl = (iconFileName: string) => {
    try {
      return new URL(`../assets/items/${iconFileName}`, import.meta.url).href;
    } catch {
      return null;
    }
  };

  const handleInteraction = (e: React.MouseEvent, item: ItemDef, direction: number) => {
    e.preventDefault();
    cycleItem(item.id, direction, item.stages.length);
  };

const renderSection = (title: string, categoryFilter: string) => {
    const categoryItems = items.filter(item => item.category === categoryFilter);
    if (categoryItems.length === 0) return null;

    return (
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ 
          borderBottom: '2px solid #444', 
          paddingBottom: '5px', 
          marginBottom: '15px',
          fontSize: '18px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          color: '#ddd'
        }}>
          {title}
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))',
          gap: '12px' 
        }}>
          {categoryItems.map((item) => {
            const currentLevel = itemStates[item.id] || 0;
            const isObtained = currentLevel > 0;

            const stageIndex = isObtained ? currentLevel - 1 : 0;
            const safeIndex = Math.min(stageIndex, item.stages.length - 1);
            const currentStage = item.stages[safeIndex];

            const imageUrl = getItemImageUrl(currentStage.icon);
            
            return (
              <div 
                key={item.id}
                onClick={(e) => handleInteraction(e, item, 1)}      
                onContextMenu={(e) => handleInteraction(e, item, -1)} 
                style={{
                  backgroundColor: '#2a2a2a',
                  border: isObtained ? '2px solid #fbbf24' : '2px solid transparent',
                  borderRadius: '8px',
                  padding: '8px',
                  cursor: 'pointer',
                  opacity: isObtained ? 1 : 0.4,
                  filter: isObtained ? 'none' : 'grayscale(100%)',
                  textAlign: 'center',
                  transition: 'all 0.1s ease',
                  userSelect: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '80px'
                }}
              >
                <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={currentStage.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'contain', 
                        imageRendering: 'pixelated' 
                      }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.innerText = '?';
                      }}
                    />
                  ) : (
                    <span style={{color: '#666'}}>?</span>
                  )}
                </div>
                
                <div style={{ 
                  fontSize: '10px', 
                  marginTop: '5px', 
                  lineHeight: '1.1',
                  color: isObtained ? '#fff' : '#888'
                }}>
                  {currentStage.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      {renderSection('Equipment', 'equipment')}  
      {renderSection('Upgrades', 'progressive')}
      {renderSection('Masks', 'mask')}
      {renderSection('Songs', 'song')}
      {renderSection('Boss Remains', 'remains')}
      {renderSection('Quest Items', 'quest')}
    </div>
  );
};