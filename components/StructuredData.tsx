import React from 'react';

interface StructuredDataProps {
  data: unknown;
}

export default function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data, null, 2);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
