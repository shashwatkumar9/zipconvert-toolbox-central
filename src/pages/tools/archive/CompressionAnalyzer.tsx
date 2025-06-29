
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart } from 'lucide-react';

const CompressionAnalyzer = () => (
  <Layout>
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <BarChart className="h-12 w-12 mx-auto text-blue-600" />
        <h1 className="text-3xl font-bold">Compression Analyzer</h1>
        <p className="text-gray-600">Compare compression ratios across formats</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Analyze Compression</CardTitle></CardHeader>
        <CardContent>
          <Button className="w-full">Analyze Compression Ratios</Button>
        </CardContent>
      </Card>
    </div>
  </Layout>
);

export default CompressionAnalyzer;
