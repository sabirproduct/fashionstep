// src/components/RealtimeDatabaseExample.tsx
'use client';

import { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { realtimeDb } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RealtimeDatabaseExample() {
  const [message, setMessage] = useState('');
  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    const messageRef = ref(realtimeDb, 'message');
    const unsubscribe = onValue(messageRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSavedMessage(data);
      }
    });

    return () => unsubscribe();
  }, []);

  const saveMessage = () => {
    set(ref(realtimeDb, 'message'), message);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Firebase Realtime Database Example</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium">Current message:</p>
            <p className="p-2 border rounded mt-1 min-h-10">
              {savedMessage || 'No message saved yet.'}
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium">Update message:</p>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message to save"
            />
          </div>
          
          <Button onClick={saveMessage} className="w-full">
            Save to Realtime Database
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}