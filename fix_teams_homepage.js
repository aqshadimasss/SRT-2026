const fs = require('fs');

const management = [
  { name: '-', role: 'President', imagePath: '/teams/BPH/President.webp' },
  { name: '-', role: 'Vice President', imagePath: '/teams/BPH/Vice President.webp' },
  { name: '-', role: 'Head Of Secretary', imagePath: '/teams/BPH/Head Of Secretary.webp' },
  { name: '-', role: 'Head Of Financial Manager', imagePath: '/teams/BPH/Head Of Financial Manager.webp' },
  { name: '-', role: 'Head Of Human Resource', imagePath: '/teams/HRD/Head Of Human Resource.webp' },
  { name: '-', role: 'HEAD OF TEAM MANAGER', imagePath: '/teams/MANAGER/HEAD OF TEAM MANAGER.webp' },
  { name: '-', role: 'Head Of Creative Media', imagePath: '/teams/MEDKRE/Head Of Creative Media.webp' },
  { name: '-', role: 'HEAD OF PR', imagePath: '/teams/PR/HEAD OF PR.webp' },
  { name: '-', role: 'Head Of Sponsor', imagePath: '/teams/SPONSOR/Head Of Sponsor.webp' }
];

let content = fs.readFileSync('components/Teams.jsx', 'utf8');

// Replace the management array
content = content.replace(/const management = \[\s+[\s\S]+?\];/, 'const management = ' + JSON.stringify(management, null, 2) + ';');

// Replace the avatar rendering
const avatarRegex = /<div className="team-avatar">[\s\S]+?<\/div>/;
const newAvatar = `
              <div className="team-avatar">
                <img 
                  src={member.imagePath} 
                  alt={member.role} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>`;

content = content.replace(avatarRegex, newAvatar);

// HP Dark Mode styling update for Teams.jsx
content = content.replace(/background: var\(--colors-ghost-bg\);/g, 'background: transparent;');
content = content.replace(/border-radius: var\(--rounded-xxl\);/g, 'border-radius: var(--rounded-md);');
content = content.replace(/background: rgba\(250, 127, 170, 0\.1\);/g, 'background: transparent;');
content = content.replace(/border-color: var\(--colors-accent-pink\);/g, 'border-color: var(--colors-primary);');
content = content.replace(/color: var\(--colors-accent-pink\);/g, 'color: var(--colors-primary);');
content = content.replace(/color: var\(--colors-accent-lime\);/g, 'color: var(--colors-text-secondary);');
content = content.replace(/border: 1px solid var\(--colors-card-border\);/g, 'border: 2px solid var(--colors-primary);');

fs.writeFileSync('components/Teams.jsx', content);
console.log('Updated Teams.jsx');
