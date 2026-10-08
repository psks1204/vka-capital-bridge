const fs = require('fs');

const navbarFile = 'src/components/navigation/Navbar.tsx';
let navbarContent = fs.readFileSync(navbarFile, 'utf8');

const target = `{navServicesHierarchy.map((item) => (
                <div key={item.slug} className="dropdown-group">
                  <Link
                    to={\`/services/\${item.slug}\`}
                    className={\`dropdown-link \${location.pathname === \`/services/\${item.slug}\` ? 'dropdown-active' : ''}\`}
                    onClick={closeMenu}
                  >
                    <span className="dropdown-title">{item.title}</span>
                    {item.children && item.children.length > 0 && (
                      <ChevronRight size={12} className="dropdown-child-indicator" />
                    )}
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <div className="dropdown-children">
                      {item.children.map((child) => (
                        <Link
                          key={child.slug}
                          to={\`/services/\${child.slug}\`}
                          className={\`dropdown-link dropdown-child-link \${location.pathname === \`/services/\${child.slug}\` ? 'dropdown-active' : ''}\`}
                          onClick={closeMenu}
                        >
                          <span className="dropdown-title">{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}`;

const replacement = `{navServicesHierarchy.map((item) => (
                <div key={item.slug} className="dropdown-group">
                  <div className="dropdown-item-header" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link
                      to={\`/services/\${item.slug}\`}
                      className={\`dropdown-link \${location.pathname === \`/services/\${item.slug}\` ? 'dropdown-active' : ''}\`}
                      onClick={closeMenu}
                      style={{ flex: 1 }}
                    >
                      <span className="dropdown-title">{item.title}</span>
                    </Link>
                    {item.children && item.children.length > 0 && (
                      <button
                        className="child-toggle-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setExpandedMobileItem(expandedMobileItem === item.slug ? null : item.slug);
                        }}
                        style={{ padding: '12px 16px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#555' }}
                        aria-label="Toggle submenu"
                      >
                        <ChevronDown size={14} className={\`dropdown-chevron \${expandedMobileItem === item.slug ? 'rotate-180' : ''}\`} style={{ transition: 'transform 0.3s' }} />
                      </button>
                    )}
                  </div>
                  {item.children && item.children.length > 0 && (
                    <div className={\`dropdown-children \${expandedMobileItem === item.slug ? 'expanded' : ''}\`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.slug}
                          to={\`/services/\${child.slug}\`}
                          className={\`dropdown-link dropdown-child-link \${location.pathname === \`/services/\${child.slug}\` ? 'dropdown-active' : ''}\`}
                          onClick={closeMenu}
                        >
                          <span className="dropdown-title">{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}`;

navbarContent = navbarContent.replace(target, replacement);
fs.writeFileSync(navbarFile, navbarContent);
console.log('Navbar.tsx updated successfully');
