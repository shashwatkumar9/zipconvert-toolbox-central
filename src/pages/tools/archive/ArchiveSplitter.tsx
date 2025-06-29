
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Scissors } from 'lucide-react';

const ArchiveSplitter = () => (
  <Layout>
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <Scissors className="h-12 w-12 mx-auto text-blue-600" />
        <h1 className="text-3xl font-bold">Archive Splitter</h1>
        <p className="text-gray-600">Split large archives into smaller parts</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Split Archive</CardTitle></CardHeader>
        <CardContent>
          <Button className="w-full">Split Archive</Button>
        </CardContent>
      </Card>
    </div>
  </Layout>
);

export default ArchiveSplitter;
