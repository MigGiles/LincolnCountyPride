
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LifeBuoy } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <LifeBuoy className="h-16 w-16 text-primary mx-auto" />
        <h1 className="text-4xl md:text-5xl font-bold">Community Resources</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find helpful resources, support, and information relevant to the LGBTQ+ community in Lincoln County and beyond.
        </p>
      </header>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Resource</CardTitle>
          <CardDescription>Explore different resources you might need.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>LGBT National Hotline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                <b>National Hotline - 888-843-4564 Youth Hotline - 800-246-7743 </b>
                </p>
                <p className="text-sm text-muted-foreground">
                On the LGBT National Hotline, we provide a confidential safe space where callers of any age can speak 
                about sexual orientation or gender identity/expression issues. This includes coming out issues, relationship 
                concerns, bullying, workplace issues, HIV/AIDS anxiety, safer sex information, suicide, and much more
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>The Trevor Project</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-sm text-muted-foreground">
                <b>Call - 866-488-7386 </b>
                </p>
                <p className="text-sm text-muted-foreground">
                The Trevor Project is the leading national organization providing crisis intervention and suicide prevention 
                services to lesbian, gay, bisexual, transgender and questioning (LGBTQ) young people ages 13-24.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>988 LifeLine</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-sm text-muted-foreground">
                <b>Call/Text 988 or <a href="https://chat.988lifeline.org/"><i>Click Here for Live Chat</i></a></b>
                </p>
                <p className="text-sm text-muted-foreground">
                The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and 
                confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Crisis Text Line</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-sm text-muted-foreground">
                <b>Text Start to 741-741 or <a href="https://connect.crisistextline.org/chat?utm_source=popup"><i>Click Here for Live Chat</i></a></b>
                </p>
                <p className="text-sm text-muted-foreground">
                Crisis Text Line is free, 24/7 support for those in crisis. Text from anywhere in the USA to text with a 
                trained Crisis Counselor.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trans LifeLine</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-sm text-muted-foreground">
                <b>Call: 877-565-8860</b>
                </p>
                <p className="text-sm text-muted-foreground">
                Trans Lifeline provides trans peer support for our community that’s been divested from police since day one. We’re run
                 by and for trans people. Trans Lifeline connects trans people to the community support and resources we need to 
                 survive and thrive.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>National Runaway Safeline</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-sm text-muted-foreground">
                <b>Call: 1-800-RUNAWAY (1-800-786-2929)</b>
                </p>
                <p className="text-sm text-muted-foreground">
                <i>You need someone to talk to...</i>

                Feeling alone and unheard can potentially place you in a dangerous situation. You may feel isolated from 
                supports, and this isolation can lead to depression, anger, frustration and suicidal ideation.
                </p>
              </CardContent>
            </Card>
          </div>
          <p className="mt-8 text-center text-muted-foreground">
          Know any resources we should add please feel free to <a href="mailto:mig.giles85@gmail.com">send email</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
