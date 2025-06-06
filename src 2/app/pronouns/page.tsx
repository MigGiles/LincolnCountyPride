
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tags } from "lucide-react"; // Using Tags as a placeholder icon

export default function PronounsPage() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <Tags className="h-16 w-16 text-primary mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold">Understanding Pronouns</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn about the importance of personal pronouns and how to use them respectfully.
        </p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Why Pronouns Matter</CardTitle>
          <CardDescription>Respecting pronouns is respecting identity.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Pronouns are how we refer to someone instead of using their name. Using someone's correct pronouns is a fundamental way to show respect for their identity. When we intentionally or unintentionally use the wrong pronouns, it can make people feel disrespected, invalidated, and alienated.
          </p>
          <p>
            Common pronouns include she/her, he/him, and they/them. Some people use other pronouns as well. It's always best to ask or provide your own pronouns to create an inclusive environment.
          </p>
          <h3 className="text-xl font-semibold pt-4">Examples:</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li>"<strong>She</strong> is attending the festival, and I'm excited to see <strong>her</strong> perform."</li>
            <li>"<strong>He</strong> shared <strong>his</strong> story, and it was very moving."</li>
            <li>"<strong>They</strong> are organizing the workshop, and <strong>their</strong> efforts are appreciated."</li>
          </ul>
          <p className="pt-4">
            You can't always know someone's pronouns by looking at them. Asking and correctly using someone's pronouns is one of the most basic ways to show your respect for their gender identity.
          </p>
          <p className="mt-6 text-sm text-center text-muted-foreground">
            For more in-depth information, consider visiting resources like <a href="https://www.pronouns.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">MyPronouns.org</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
