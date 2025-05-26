import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-serif text-amber-900 mb-2">Settings</h1>
        <p className="text-amber-800">Manage your church website settings</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-amber-900">Church Information</h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="church-name">Church Name</Label>
                <Input id="church-name" defaultValue="RCCG Upper Room Parish" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="church-address">Address</Label>
                <Textarea
                  id="church-address"
                  defaultValue="2 Tunji Olusanya, Oja Bus stop, Yakoyo, Ojodu, Lagos"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="church-phone">Phone Number</Label>
                <Input id="church-phone" defaultValue="+2348088789556" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="church-email">Email Address</Label>
                <Input id="church-email" type="email" defaultValue="info@rccgupperroom.com.ng" />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-xl font-medium text-amber-900">Social Media Links</h2>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input id="facebook" defaultValue="https://facebook.com/rccg.upperroomparish.9" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  defaultValue="https://www.instagram.com/rccgtheupperroom"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input id="twitter" defaultValue="" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="youtube">YouTube</Label>
                <Input id="youtube" defaultValue="" />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-amber-800 hover:bg-amber-900">Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-amber-900">Email Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Prayer Requests</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications for new prayer requests
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>New Testimonies</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications for new testimonies
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Event Registrations</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications for new event registrations
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-xl font-medium text-amber-900">System Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Security Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications for important security events
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>System Updates</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications for system updates and maintenance
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-amber-800 hover:bg-amber-900">Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-amber-900">Security Settings</h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-xl font-medium text-amber-900">Two-Factor Authentication</h2>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Enable 2FA</Label>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Switch />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-amber-800 hover:bg-amber-900">Save Changes</Button>
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-amber-900">Payment Integration</h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="stripe-key">Stripe API Key</Label>
                <Input id="stripe-key" type="password" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable Online Donations</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow members to make donations online
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-xl font-medium text-amber-900">Email Service</h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="smtp-host">SMTP Host</Label>
                <Input id="smtp-host" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="smtp-port">SMTP Port</Label>
                <Input id="smtp-port" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="smtp-username">Username</Label>
                <Input id="smtp-username" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="smtp-password">Password</Label>
                <Input id="smtp-password" type="password" />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-amber-800 hover:bg-amber-900">Save Changes</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}