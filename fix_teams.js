const fs = require('fs');
const path = require('path');
function getMembers(dir, prefix) {
    const fullPath = path.join(process.cwd(), 'public', 'teams', dir);
    if (!fs.existsSync(fullPath)) return [];
    return fs.readdirSync(fullPath)
      .filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png'))
      .map(f => {
          const role = f.replace(/\.(webp|jpg|png)$/, '');
          return { name: '-', role, imagePath: `/teams/${dir}/${f}` };
      });
}

// MANAGEMENT TEAM
const managementStr = `  const departments = [
    {
      name: "BPH (Badan Pengurus Harian)",
      description: "The core executive body steering the visionary direction, administration, and financial strategy of the Soedirman Robotic Team.",
      members: ${JSON.stringify(getMembers('BPH'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
    },
    {
      name: "HRD (Human Resource Development)",
      description: "Coordinating member evaluations, training roadmaps, and organizing technical talent development tracks.",
      members: ${JSON.stringify(getMembers('HRD'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
    },
    {
      name: "Team Manager",
      description: "Overseeing operational logistics, team coordination, and ensuring seamless execution across all robot competition divisions.",
      members: ${JSON.stringify(getMembers('MANAGER'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
    },
    {
      name: "MEDKRE (Media Kreatif)",
      description: "Creating premium digital graphics, interactive branding kits, video layouts, and managing social feeds for the team.",
      members: ${JSON.stringify(getMembers('MEDKRE'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
    },
    {
      name: "PR (Public Relations)",
      description: "Handling organizational brand representation, external networks, university alliances, and media inquiries.",
      members: ${JSON.stringify(getMembers('PR'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
    },
    {
      name: "Sponsor",
      description: "Managing partnerships, funding acquisition, and corporate sponsorship relations for competition seasons.",
      members: ${JSON.stringify(getMembers('SPONSOR'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
  ];
`;
fs.writeFileSync('app/managementTeam/arrays.js', managementStr);

// KRI TEAMS
const kriStr = `  const teams = [
    {
      name: "Blakasutha (KRAI)",
      description: "ABU Robocon Division specializing in complex task-oriented autonomous and manual robotics.",
      image: "/images/kri/blakasutha.jpg",
      members: ${JSON.stringify(getMembers('KRAI'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
    },
    {
      name: "Satria (KRSRI)",
      description: "Search and Rescue Robot Division focused on autonomous navigation, obstacle avoidance, and disaster mitigation simulations.",
      image: "/images/kri/satria.jpg",
      members: ${JSON.stringify(getMembers('KRSRI'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
    },
    {
      name: "Yudhistira (KRTMI)",
      description: "Thematic Robot Division combining artistic choreography with precise mechanical engineering and sensors.",
      image: "/images/kri/yudhistira.jpg",
      members: ${JSON.stringify(getMembers('KRTMI'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
    }
  ];
`;
fs.writeFileSync('app/kri-teams/arrays.js', kriStr);

// KRTI TEAMS
const krtiStr = `  const teams = [
    {
      name: "Biantara RP",
      description: "Racing Plane Division optimizing aerodynamics, speed, and precision control for high-speed aerial track competitions.",
      image: "/images/krti/rp.jpg",
      members: ${JSON.stringify(getMembers('KRTI RP'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
    },
    {
      name: "Biantara FW",
      description: "Fixed Wing Division focusing on long-endurance autonomous flights, payload delivery, and aerial mapping capabilities.",
      image: "/images/krti/fw.jpg",
      members: ${JSON.stringify(getMembers('KRTI FW'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
    },
    {
      name: "Biantara LELA",
      description: "Vertical Take-Off and Landing (VTOL) Division specializing in agile maneuvers, hybrid mechanics, and advanced telemetry.",
      image: "/images/krti/lela.jpg",
      members: ${JSON.stringify(getMembers('KRTI LELA'), null, 8).replace(/\}/g, '      }').replace(/\]/g, '    ]')}
    }
  ];
`;
fs.writeFileSync('app/krti-teams/arrays.js', krtiStr);

['app/managementTeam', 'app/kri-teams', 'app/krti-teams'].forEach(dir => {
  const pageFile = dir + '/page.js';
  const arrayFile = dir + '/arrays.js';
  if (!fs.existsSync(arrayFile)) return;
  const content = fs.readFileSync(pageFile, 'utf8');
  const newArray = fs.readFileSync(arrayFile, 'utf8');
  const updatedContent = content.replace(/const (departments|teams) = \[\s+([\s\S]+?)\s+\];\s+return/, newArray + '\n  return');
  
  // also fix the React key while we are at it
  const fixedKeys = updatedContent.replace(/key=\{member\.name\}/g, 'key={mIdx}');
  const fixedMap = fixedKeys.replace(/\.map\(\(member\) => \(/g, '.map((member, mIdx) => (');
  
  fs.writeFileSync(pageFile, fixedMap);
});
console.log('Injected arrays and fixed keys');
