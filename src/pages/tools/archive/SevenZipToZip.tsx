
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const SevenZipToZip = () => (
  <Layout>
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <ArrowRight className="h-12 w-12 mx-auto text-purple-600" />
        <h1 className="text-3xl font-bold">7Z to ZIP Converter</h1>
        <p className="text-gray-600">Convert 7-Zip archives to ZIP format</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Convert 7Z to ZIP</CardTitle></CardHeader>
        <CardContent>
          <Button className="w-full">Convert to ZIP</Button>
        </CardContent>
      </Card>
    </div>
  </Layout>
);

export default SevenZipToZip;
