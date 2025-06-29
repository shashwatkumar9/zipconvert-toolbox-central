
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Volume2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const TextToSpeechConverter = () => {
  const [text, setText] = useState('');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Text to Speech Converter
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Convert any text into natural-sounding speech with multiple voice options and languages.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="destructive">Tool Offline</Badge>
              <Badge variant="secondary">API Required</Badge>
            </div>
          </div>

          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Service Currently Offline:</strong> This text-to-speech converter requires speech synthesis API services (ElevenLabs, OpenAI, or Web Speech API) that are not currently available. The tool will be activated once API access is configured.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5" />
                Text to Speech Conversion
              </CardTitle>
              <CardDescription>
                Enter your text below to convert to speech (service currently unavailable)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Textarea
                placeholder="Enter the text you want to convert to speech..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[200px] text-base"
                disabled
              />
              
              <Button disabled className="w-full">
                <Volume2 className="h-4 w-4 mr-2" />
                Convert to Speech (Offline)
              </Button>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">What this tool will provide when available:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• High-quality text-to-speech conversion</li>
                  <li>• Multiple voice options (male, female, different accents)</li>
                  <li>• Adjustable speech speed and pitch</li>
                  <li>• Multiple language support</li>
                  <li>• Audio file download (MP3, WAV)</li>
                  <li>• SSML support for advanced speech control</li>
                  <li>• Real-time playback and preview</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TextToSpeechConverter;
