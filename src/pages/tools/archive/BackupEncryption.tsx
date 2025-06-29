
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

const BackupEncryption = () => (
  <Layout>
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <Lock className="h-12 w-12 mx-auto text-red-600" />
        <h1 className="text-3xl font-bold">Backup Encryption</h1>
        <p className="text-gray-600">Encrypt backup archives for security</p>
      </div>
      <Card>
        <CardHeader><CardTitle>Encrypt Backup</CardTitle></CardHeader>
        <CardContent>
          <Button className="w-full">Encrypt Backup Files</Button>
        </CardContent>
      </Card>
    </div>
  </Layout>
);

export default BackupEncryption;
