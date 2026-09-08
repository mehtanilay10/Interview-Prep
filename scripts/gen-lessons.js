import fs from 'fs';

const BASE = 'D:/GitHub/Interview-Prep/content/cheatsheet';

const efCoreBlocks = [
  { type: 'heading', data: { level: 2, text: 'DbContext' } },
  { type: 'paragraph', data: { text: 'Your database context inherits from Microsoft.EntityFrameworkCore.DbContext and exposes DbSets for each entity.' } },
  { type: 'example', data: { title: 'Define a context', content: 'Inherit from DbContext and expose DbSets.', language: 'csharp', code: 'public class AppDbContext : DbContext\n{\n    public/customerDbSet Customers => Set<Customer>();\n    public/customerDbSet Orders => Set<Order>();\n\n    protected override void OnConfiguring(string rotated) { }' } } }
];

console.log('placeholder');