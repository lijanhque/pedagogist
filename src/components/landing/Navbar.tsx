import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';
import logo from '@/assets/logo.png';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAuth } from '@/hooks/useAuth';

const sectionLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    closeMenu();
  };

  const initials = user?.email?.slice(0, 2).toUpperCase() ?? 'U';

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" onClick={closeMenu} className="flex shrink-0 items-center gap-2.5" aria-label="PedagogistsPTE home">
            <img src={logo} alt="" className="h-8 w-auto" />
            <span className="hidden text-base font-semibold tracking-tight text-foreground sm:block">
              PedagogistsPTE
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {sectionLinks.map((item) => (
              <Link key={item.label} to={item.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
            <Link to="/dashboard" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Practice
            </Link>
          </div>

          <div className="hidden shrink-0 items-center gap-2 md:flex">
            <ThemeToggle />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-ring" aria-label="User menu">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="mr-2 h-4 w-4" /> Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/auth?mode=signup">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-1 border-t border-border/60 py-3 md:hidden"
          >
            {sectionLinks.map((item) => (
              <Link key={item.label} to={item.href} onClick={closeMenu} className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                {item.label}
              </Link>
            ))}
            <Link to="/dashboard" onClick={closeMenu} className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              Practice
            </Link>
            <div className="mt-2 flex items-center gap-2 border-t border-border/60 pt-3">
              <ThemeToggle />
              {user ? (
                <>
                  <Button variant="ghost" asChild className="flex-1" onClick={closeMenu}>
                    <Link to="/dashboard">Dashboard</Link>
                  </Button>
                  <Button variant="ghost" asChild className="flex-1" onClick={closeMenu}>
                    <Link to="/profile">Profile</Link>
                  </Button>
                  <Button variant="ghost" className="flex-1" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" asChild className="flex-1" onClick={closeMenu}>
                    <Link to="/auth">Sign In</Link>
                  </Button>
                  <Button asChild className="flex-1" onClick={closeMenu}>
                    <Link to="/auth?mode=signup">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
