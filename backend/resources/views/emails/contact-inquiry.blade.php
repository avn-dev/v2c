<x-mail::message>
# Neue Anfrage von {{ $lead->name }}

**Service:** {{ $lead->service_type ?? '–' }}
**Sprache:** {{ strtoupper($lead->lang) }}

---

{!! nl2br(e($lead->message)) !!}

---

**Antworten an:** {{ $lead->name }} &lt;{{ $lead->email }}&gt;

</x-mail::message>
