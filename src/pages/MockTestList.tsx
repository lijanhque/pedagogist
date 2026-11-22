import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { 
  ChevronRight, 
  Play, 
  Clock, 
  FileText, 
  Crown,
  Star,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { mockTestsList, sectionTests, questionTests, MockTestInfo } from "@/data/mockTestsBank";
import { useCredits } from "@/hooks/useCredits";
import logo from "@/assets/logo.png";

export default function MockTestList() {
  const { user, signOut } = useAuth();
  const { tier } = useCredits();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"full" | "section" | "question">("full");

  const handleStartTest = (test: MockTestInfo) => {
    if (test.type === "premium" && tier === "free") {
      navigate("/billing");
      return;
    }
    navigate(`/mock-test?id=${test.id}`);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-success/10 text-success border-success/20";
      case "medium":
        return "bg-warning/10 text-warning border-warning/20";
      case "hard":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const renderTestItem = (test: MockTestInfo) => (
    <motion.div
      key={test.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ x: 4 }}
      className="group"
    >
      <Card 
        className={cn(
          "p-4 cursor-pointer transition-all duration-200 border-border/50 hover:border-primary/30 hover:shadow-md",
          "bg-card hover:bg-accent/5"
        )}
        onClick={() => handleStartTest(test)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {test.type === "free" ? (
                <Badge variant="secondary" className="bg-success/10 text-success text-xs">
                  Free
                </Badge>
              ) : (
                <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                  <Crown className="h-3 w-3 mr-1" />
                  Pro & VIP
                </Badge>
              )}
              {test.isNew && (
                <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                  <Sparkles className="h-3 w-3 mr-1" />
                  New
                </Badge>
              )}
              <Badge variant="outline" className={cn("text-xs", getDifficultyColor(test.difficulty))}>
                {test.difficulty}
              </Badge>
            </div>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
              {test.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {test.description}
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {test.duration} min
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-3 w-3" />
                {test.totalQuestions} questions
              </span>
              {test.version && (
                <span className="text-primary/70">
                  {test.version}
                </span>
              )}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </Card>
    </motion.div>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="border-b bg-card/50 p-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="size-9 shrink-0 rounded-md" />
              <h1 className="text-xl font-bold text-foreground">Mock Tests</h1>
            </div>
          </header>

          {/* Tabs */}
          <div className="flex-1 p-4 overflow-auto">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "full" | "section" | "question")}>
              <TabsList className="w-full justify-start bg-transparent border-b rounded-none p-0 h-auto">
                <TabsTrigger 
                  value="full"
                  className={cn(
                    "rounded-none border-b-2 border-transparent pb-3 pt-2 px-4",
                    "data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}
                >
                  Full Tests
                </TabsTrigger>
                <TabsTrigger 
                  value="section"
                  className={cn(
                    "rounded-none border-b-2 border-transparent pb-3 pt-2 px-4",
                    "data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}
                >
                  Section Tests
                </TabsTrigger>
                <TabsTrigger 
                  value="question"
                  className={cn(
                    "rounded-none border-b-2 border-transparent pb-3 pt-2 px-4",
                    "data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  )}
                >
                  Question Tests
                </TabsTrigger>
              </TabsList>

              <ScrollArea className="flex-1 mt-4">
                <TabsContent value="full" className="mt-0 space-y-3">
                  {mockTestsList.map(renderTestItem)}
                </TabsContent>

                <TabsContent value="section" className="mt-0 space-y-3">
                  {sectionTests.map(renderTestItem)}
                </TabsContent>

                <TabsContent value="question" className="mt-0 space-y-3">
                  {questionTests.map(renderTestItem)}
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>

          {/* Footer CTA */}
          <div className="p-4 border-t bg-card/80 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{tier === "free" ? "Unlock the full mock-test library" : `${tier.toUpperCase()} access is active`}</p>
                  <p className="text-sm text-muted-foreground">
                    {tier === "free" ? "Pro and VIP packs unlock every mock test" : "Your pack includes unlimited mock tests"}
                  </p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground" onClick={() => navigate("/billing")}>
                <Crown className="h-4 w-4 mr-2" />
                {tier === "free" ? "View Plans" : "Extend Access"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
