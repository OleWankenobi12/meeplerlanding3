'use client';

import { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Card, CardContent, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  RadioGroup, RadioGroupItem
} from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Popover, PopoverTrigger, PopoverContent
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

function generateTimeOptions(step = 15) {
  const times: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += step) {
      const hh = h.toString().padStart(2, "0");
      const mm = m.toString().padStart(2, "0");
      times.push(`${hh}:${mm}`);
    }
  }
  return times;
}

export default function NewEventPage() {
  const t = useTranslations("Events");

  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);

  const minTime = "10:00";
  const maxTime = "22:00";
  const timeOptions = generateTimeOptions().filter(t => t >= minTime && t <= maxTime);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        {t("CreateTitle")}
      </h1>

      <Card className="rounded-xl shadow-md border bg-card">
        <form>
          <CardHeader>
            <CardTitle className="text-xl text-muted-foreground font-semibold">
              {t("TitleLabel")}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-sm font-medium">{t("TitleLabel")}</Label>
                <Input id="title" placeholder={t("TitlePlaceholder")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium">{t("Location")}</Label>
                <Input id="location" placeholder={t("LocationPlaceholder")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">{t("DescriptionLabel")}</Label>
              <Textarea id="description" rows={4} />
            </div>

            {/* Datum & Uhrzeit */}
            <div className="space-y-4">
              <p className="text-lg font-semibold text-muted-foreground">{t("Date")} & {t("Time")}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">{t("Date")}</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : t("Date")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white dark:bg-muted z-50 rounded-md shadow-md"
                      align="start"
                      side="bottom"
                      sideOffset={8}
                    >
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">{t("Time")}</Label>
                  <Popover open={showTimePicker} onOpenChange={setShowTimePicker}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-[6rem] justify-start font-normal">
                        <ClockIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                        {time || "--:--"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-[6rem] p-0 bg-white dark:bg-muted z-50 rounded-md shadow-md"
                      align="start"
                      side="bottom"
                      sideOffset={8}
                    >
                      <ScrollArea className="h-64 p-2">
                        {timeOptions.map((t) => (
                          <Button
                            key={t}
                            variant="ghost"
                            className="w-full justify-start px-2 text-sm"
                            onClick={() => {
                              setTime(t);
                              setShowTimePicker(false);
                            }}
                          >
                            {t}
                          </Button>
                        ))}
                      </ScrollArea>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>

            {/* Teilnahme */}
            <div className="space-y-4">
              <p className="text-lg font-semibold text-muted-foreground">{t("ParticipationLabel")}</p>
              <RadioGroup defaultValue="first-come" className="space-y-3">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="first-come" id="fc" />
                  <Label htmlFor="fc" className="text-sm">{t("ParticipationOptions.FirstCome")}</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="approval" id="approval" />
                  <Label htmlFor="approval" className="text-sm">{t("ParticipationOptions.Approval")}</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unlimited" id="unlimited" />
                  <Label htmlFor="unlimited" className="text-sm">{t("ParticipationOptions.Unlimited")}</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Teilnehmerzahl */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="minParticipants" className="text-sm font-medium">{t("MinParticipants")}</Label>
                <Input type="number" id="minParticipants" min={1} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxParticipants" className="text-sm font-medium">{t("MaxParticipants")}</Label>
                <Input type="number" id="maxParticipants" min={1} />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button type="submit" className="w-full sm:w-auto">{t("CreateButton")}</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
